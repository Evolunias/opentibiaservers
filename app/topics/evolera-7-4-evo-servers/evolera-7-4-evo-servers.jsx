import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-evo-servers');
}

export default function Evolera74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-evo-servers" />;
}
