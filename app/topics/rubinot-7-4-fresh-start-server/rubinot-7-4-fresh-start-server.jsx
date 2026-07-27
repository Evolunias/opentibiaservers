import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-fresh-start-server');
}

export default function Rubinot74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-fresh-start-server" />;
}
