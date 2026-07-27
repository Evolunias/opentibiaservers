import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-custom-map-servers');
}

export default function Tibianus13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-custom-map-servers" />;
}
