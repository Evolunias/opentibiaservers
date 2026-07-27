import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-evo-servers');
}

export default function Evolera81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-evo-servers" />;
}
