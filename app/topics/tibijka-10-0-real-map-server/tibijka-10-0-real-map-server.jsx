import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-real-map-server');
}

export default function Tibijka100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-real-map-server" />;
}
