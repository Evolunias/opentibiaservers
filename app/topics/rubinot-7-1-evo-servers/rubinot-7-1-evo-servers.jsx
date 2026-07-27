import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-evo-servers');
}

export default function Rubinot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-evo-servers" />;
}
