import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-evo-servers');
}

export default function Rubinot76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-evo-servers" />;
}
