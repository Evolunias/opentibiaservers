import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-evo-server');
}

export default function Tibiame772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-evo-server" />;
}
