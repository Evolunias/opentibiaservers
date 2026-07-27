import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-fresh-start-server');
}

export default function Rubinot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-fresh-start-server" />;
}
