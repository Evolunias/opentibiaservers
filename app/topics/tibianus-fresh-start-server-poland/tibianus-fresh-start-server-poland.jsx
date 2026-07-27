import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-poland');
}

export default function TibianusFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-poland" />;
}
