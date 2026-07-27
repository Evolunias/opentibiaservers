import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-real-map-server');
}

export default function Tibijka80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-real-map-server" />;
}
