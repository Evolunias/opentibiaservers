import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-evo-servers');
}

export default function Rubinot86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-evo-servers" />;
}
