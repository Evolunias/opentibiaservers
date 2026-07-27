import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-custom-map-server');
}

export default function Realesta96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-custom-map-server" />;
}
