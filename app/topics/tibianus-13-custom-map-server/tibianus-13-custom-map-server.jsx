import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-custom-map-server');
}

export default function Tibianus13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-custom-map-server" />;
}
