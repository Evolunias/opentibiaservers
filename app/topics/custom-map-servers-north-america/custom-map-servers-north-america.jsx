import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-north-america');
}

export default function CustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-north-america" />;
}
