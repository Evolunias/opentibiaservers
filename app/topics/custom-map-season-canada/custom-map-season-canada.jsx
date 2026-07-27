import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-canada');
}

export default function CustomMapSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-canada" />;
}
