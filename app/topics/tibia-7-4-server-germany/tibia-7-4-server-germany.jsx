import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-germany');
}

export default function Tibia74ServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-germany" />;
}
