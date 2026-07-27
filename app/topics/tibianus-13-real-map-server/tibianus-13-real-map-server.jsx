import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-real-map-server');
}

export default function Tibianus13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-real-map-server" />;
}
