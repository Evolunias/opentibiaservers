import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-europe');
}

export default function RealMapSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-europe" />;
}
