import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-real-map-server');
}

export default function Thornia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-real-map-server" />;
}
