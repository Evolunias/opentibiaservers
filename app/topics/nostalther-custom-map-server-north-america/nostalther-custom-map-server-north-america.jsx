import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-north-america');
}

export default function NostaltherCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-north-america" />;
}
