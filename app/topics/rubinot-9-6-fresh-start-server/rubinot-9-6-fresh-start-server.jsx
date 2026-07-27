import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-fresh-start-server');
}

export default function Rubinot96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-fresh-start-server" />;
}
