import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-pvpe-server');
}

export default function Canob11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-pvpe-server" />;
}
