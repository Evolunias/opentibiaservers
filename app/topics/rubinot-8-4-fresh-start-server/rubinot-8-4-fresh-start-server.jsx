import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-fresh-start-server');
}

export default function Rubinot84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-fresh-start-server" />;
}
