import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-real-map-server');
}

export default function Tibijka12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-real-map-server" />;
}
