import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-uk');
}

export default function RealMapSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-uk" />;
}
