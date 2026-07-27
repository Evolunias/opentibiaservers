import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-south-america');
}

export default function CustomMapSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-south-america" />;
}
