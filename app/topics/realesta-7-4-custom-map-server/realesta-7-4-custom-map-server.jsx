import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-custom-map-server');
}

export default function Realesta74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-custom-map-server" />;
}
