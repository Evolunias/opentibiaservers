import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-evo-servers');
}

export default function Rubinot1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-evo-servers" />;
}
