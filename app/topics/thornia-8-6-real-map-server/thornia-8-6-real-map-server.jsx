import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-real-map-server');
}

export default function Thornia86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-real-map-server" />;
}
