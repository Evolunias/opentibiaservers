import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-fresh-start-server');
}

export default function Rubinot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-fresh-start-server" />;
}
