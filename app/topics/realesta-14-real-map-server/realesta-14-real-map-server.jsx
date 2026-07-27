import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-real-map-server');
}

export default function Realesta14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-real-map-server" />;
}
