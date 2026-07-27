import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-fresh-start-server');
}

export default function Rubinot76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-fresh-start-server" />;
}
