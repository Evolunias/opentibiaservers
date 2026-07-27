import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibijka-server');
}

export default function CustomMapTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibijka-server" />;
}
