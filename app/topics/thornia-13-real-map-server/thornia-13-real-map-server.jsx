import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-real-map-server');
}

export default function Thornia13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-real-map-server" />;
}
