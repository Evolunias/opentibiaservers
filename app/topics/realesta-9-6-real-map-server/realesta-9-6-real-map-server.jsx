import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-real-map-server');
}

export default function Realesta96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-real-map-server" />;
}
