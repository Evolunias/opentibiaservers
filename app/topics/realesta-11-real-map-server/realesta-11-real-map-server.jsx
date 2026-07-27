import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-real-map-server');
}

export default function Realesta11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-real-map-server" />;
}
