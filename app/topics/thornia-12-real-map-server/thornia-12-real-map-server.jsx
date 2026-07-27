import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-real-map-server');
}

export default function Thornia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-real-map-server" />;
}
