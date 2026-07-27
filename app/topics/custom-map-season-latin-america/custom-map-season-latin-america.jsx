import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-latin-america');
}

export default function CustomMapSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-latin-america" />;
}
