import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-real-map-server');
}

export default function Tibijka74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-real-map-server" />;
}
