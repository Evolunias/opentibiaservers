import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-evo-server');
}

export default function Tibiame15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-evo-server" />;
}
