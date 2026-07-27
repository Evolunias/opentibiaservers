import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-real-map-server');
}

export default function Realesta12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-real-map-server" />;
}
