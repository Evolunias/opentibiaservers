import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-evo-servers');
}

export default function Evolera71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-evo-servers" />;
}
