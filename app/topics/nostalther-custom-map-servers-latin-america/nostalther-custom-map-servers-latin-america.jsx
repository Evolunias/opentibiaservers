import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-latin-america');
}

export default function NostaltherCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-latin-america" />;
}
