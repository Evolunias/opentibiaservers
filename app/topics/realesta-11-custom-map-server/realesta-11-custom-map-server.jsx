import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-custom-map-server');
}

export default function Realesta11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-custom-map-server" />;
}
