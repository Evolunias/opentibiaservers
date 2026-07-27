import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-pvpe-server');
}

export default function Canob96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-pvpe-server" />;
}
