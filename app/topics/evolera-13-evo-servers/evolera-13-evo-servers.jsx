import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-evo-servers');
}

export default function Evolera13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-evo-servers" />;
}
