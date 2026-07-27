import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-argentina');
}

export default function TibianusFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-argentina" />;
}
