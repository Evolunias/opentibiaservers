import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-evo-server');
}

export default function Tibiame100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-evo-server" />;
}
