import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-evo-servers');
}

export default function Evolera96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-evo-servers" />;
}
