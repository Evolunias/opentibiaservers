import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-fresh-start-server');
}

export default function Rubinot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-fresh-start-server" />;
}
