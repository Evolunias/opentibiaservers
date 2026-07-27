import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-brazil');
}

export default function TibianusFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-brazil" />;
}
