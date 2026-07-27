import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-north-america');
}

export default function TibianusFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-north-america" />;
}
