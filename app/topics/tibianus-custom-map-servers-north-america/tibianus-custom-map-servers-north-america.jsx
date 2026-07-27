import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-north-america');
}

export default function TibianusCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-north-america" />;
}
