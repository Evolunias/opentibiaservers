import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-real-map-server');
}

export default function Realesta772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-real-map-server" />;
}
