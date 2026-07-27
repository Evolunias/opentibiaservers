import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-canob-server');
}

export default function PvpeCanobServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-canob-server" />;
}
