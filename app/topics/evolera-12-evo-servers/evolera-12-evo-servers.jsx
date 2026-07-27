import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-evo-servers');
}

export default function Evolera12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-evo-servers" />;
}
