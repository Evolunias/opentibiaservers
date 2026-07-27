import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-germany');
}

export default function Tibia13ServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-germany" />;
}
