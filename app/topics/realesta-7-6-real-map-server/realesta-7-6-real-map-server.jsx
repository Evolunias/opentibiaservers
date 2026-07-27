import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-real-map-server');
}

export default function Realesta76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-real-map-server" />;
}
