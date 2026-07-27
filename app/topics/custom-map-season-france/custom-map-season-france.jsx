import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-france');
}

export default function CustomMapSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-france" />;
}
