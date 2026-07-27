import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-evo-server');
}

export default function Tibiame81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-evo-server" />;
}
