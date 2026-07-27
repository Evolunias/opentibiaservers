import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-north-america');
}

export default function CustomMapSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-north-america" />;
}
