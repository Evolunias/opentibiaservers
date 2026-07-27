import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-germany');
}

export default function Tibia86ServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-germany" />;
}
