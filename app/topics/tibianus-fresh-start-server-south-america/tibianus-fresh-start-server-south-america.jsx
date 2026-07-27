import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-south-america');
}

export default function TibianusFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-south-america" />;
}
