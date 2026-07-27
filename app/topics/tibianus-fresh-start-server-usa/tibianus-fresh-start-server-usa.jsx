import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-usa');
}

export default function TibianusFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-usa" />;
}
