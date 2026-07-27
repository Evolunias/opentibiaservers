import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-evo-servers');
}

export default function Rubinot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-evo-servers" />;
}
