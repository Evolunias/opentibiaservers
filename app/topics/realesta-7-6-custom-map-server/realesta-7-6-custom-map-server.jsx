import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-custom-map-server');
}

export default function Realesta76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-custom-map-server" />;
}
