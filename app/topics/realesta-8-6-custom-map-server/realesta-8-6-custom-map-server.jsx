import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-custom-map-server');
}

export default function Realesta86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-custom-map-server" />;
}
