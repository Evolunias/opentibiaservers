import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-poland');
}

export default function RealMapSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-poland" />;
}
