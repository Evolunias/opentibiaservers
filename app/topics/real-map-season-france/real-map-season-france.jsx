import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-france');
}

export default function RealMapSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-france" />;
}
