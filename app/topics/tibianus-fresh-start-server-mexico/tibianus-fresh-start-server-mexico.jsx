import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-mexico');
}

export default function TibianusFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-mexico" />;
}
