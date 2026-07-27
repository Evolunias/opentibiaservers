import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibijka-servers');
}

export default function CustomMapTibijkaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibijka-servers" />;
}
