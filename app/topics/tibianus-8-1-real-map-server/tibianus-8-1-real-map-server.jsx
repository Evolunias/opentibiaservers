import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-real-map-server');
}

export default function Tibianus81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-real-map-server" />;
}
