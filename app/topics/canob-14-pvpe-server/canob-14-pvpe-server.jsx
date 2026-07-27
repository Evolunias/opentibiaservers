import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-pvpe-server');
}

export default function Canob14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-pvpe-server" />;
}
