import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibianus-servers');
}

export default function CustomMapTibianusServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibianus-servers" />;
}
