import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-north-america');
}

export default function CustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-north-america" />;
}
