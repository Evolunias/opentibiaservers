import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-real-map-server');
}

export default function Tibianus12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-real-map-server" />;
}
