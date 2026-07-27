import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-evo-servers');
}

export default function Evolera84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-evo-servers" />;
}
