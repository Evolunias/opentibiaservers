import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-evo-servers');
}

export default function Rubinot772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-evo-servers" />;
}
