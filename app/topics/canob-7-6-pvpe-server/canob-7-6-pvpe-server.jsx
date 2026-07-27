import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-pvpe-server');
}

export default function Canob76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-pvpe-server" />;
}
