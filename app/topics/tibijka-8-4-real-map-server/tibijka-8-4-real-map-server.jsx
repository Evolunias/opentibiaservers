import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-real-map-server');
}

export default function Tibijka84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-real-map-server" />;
}
