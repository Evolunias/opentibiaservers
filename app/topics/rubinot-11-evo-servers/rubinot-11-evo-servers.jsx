import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-evo-servers');
}

export default function Rubinot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-evo-servers" />;
}
