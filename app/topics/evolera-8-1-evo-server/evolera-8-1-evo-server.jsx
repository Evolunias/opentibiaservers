import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-evo-server');
}

export default function Evolera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-evo-server" />;
}
