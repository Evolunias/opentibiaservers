import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-fresh-start-server');
}

export default function Rubinot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-fresh-start-server" />;
}
