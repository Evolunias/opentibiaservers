import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-north-america');
}

export default function UnlineCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-north-america" />;
}
