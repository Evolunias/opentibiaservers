import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-germany');
}

export default function TibianusFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-germany" />;
}
