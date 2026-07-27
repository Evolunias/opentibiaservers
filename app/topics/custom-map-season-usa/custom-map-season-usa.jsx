import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-usa');
}

export default function CustomMapSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-usa" />;
}
