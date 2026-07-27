import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-custom-map-server');
}

export default function Realesta12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-custom-map-server" />;
}
