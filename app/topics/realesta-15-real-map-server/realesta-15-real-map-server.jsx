import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-real-map-server');
}

export default function Realesta15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-real-map-server" />;
}
