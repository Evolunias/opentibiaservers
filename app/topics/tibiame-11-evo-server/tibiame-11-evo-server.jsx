import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-evo-server');
}

export default function Tibiame11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-evo-server" />;
}
