import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-custom-map-server');
}

export default function Realesta84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-custom-map-server" />;
}
