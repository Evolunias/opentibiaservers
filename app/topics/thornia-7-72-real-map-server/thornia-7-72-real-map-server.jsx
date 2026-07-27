import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-real-map-server');
}

export default function Thornia772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-real-map-server" />;
}
