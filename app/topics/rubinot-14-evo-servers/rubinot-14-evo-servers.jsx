import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-evo-servers');
}

export default function Rubinot14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-evo-servers" />;
}
