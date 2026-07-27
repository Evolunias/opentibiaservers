import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-fresh-start-server');
}

export default function Rubinot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-fresh-start-server" />;
}
