import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-north-america');
}

export default function NostaltherCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-north-america" />;
}
