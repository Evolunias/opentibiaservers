import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-uk');
}

export default function TibianusFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-uk" />;
}
