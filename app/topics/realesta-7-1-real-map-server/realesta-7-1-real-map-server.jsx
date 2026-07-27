import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-real-map-server');
}

export default function Realesta71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-real-map-server" />;
}
