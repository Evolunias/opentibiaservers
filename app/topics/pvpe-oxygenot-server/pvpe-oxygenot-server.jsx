import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-oxygenot-server');
}

export default function PvpeOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-oxygenot-server" />;
}
