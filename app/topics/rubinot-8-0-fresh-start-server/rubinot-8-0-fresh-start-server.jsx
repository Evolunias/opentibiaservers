import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-fresh-start-server');
}

export default function Rubinot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-fresh-start-server" />;
}
