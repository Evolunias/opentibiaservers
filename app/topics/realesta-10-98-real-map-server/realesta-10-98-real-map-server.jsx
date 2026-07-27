import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-real-map-server');
}

export default function Realesta1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-real-map-server" />;
}
