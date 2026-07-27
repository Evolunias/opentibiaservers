import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-custom-map-server');
}

export default function Realesta15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-custom-map-server" />;
}
