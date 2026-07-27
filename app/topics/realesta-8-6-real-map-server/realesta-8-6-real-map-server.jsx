import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-real-map-server');
}

export default function Realesta86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-real-map-server" />;
}
