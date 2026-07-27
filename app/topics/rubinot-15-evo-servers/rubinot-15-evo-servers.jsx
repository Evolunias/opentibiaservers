import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-evo-servers');
}

export default function Rubinot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-evo-servers" />;
}
