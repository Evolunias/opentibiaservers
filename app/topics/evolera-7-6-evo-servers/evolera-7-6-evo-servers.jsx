import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-evo-servers');
}

export default function Evolera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-evo-servers" />;
}
