import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-evo-server');
}

export default function Evolera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-evo-server" />;
}
