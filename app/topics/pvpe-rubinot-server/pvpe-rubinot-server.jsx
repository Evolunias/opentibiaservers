import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-rubinot-server');
}

export default function PvpeRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-rubinot-server" />;
}
