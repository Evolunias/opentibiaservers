import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-pvpe-server');
}

export default function Canob12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-pvpe-server" />;
}
