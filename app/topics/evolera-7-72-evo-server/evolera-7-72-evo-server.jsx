import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-evo-server');
}

export default function Evolera772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-evo-server" />;
}
