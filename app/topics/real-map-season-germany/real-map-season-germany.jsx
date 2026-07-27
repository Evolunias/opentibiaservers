import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-germany');
}

export default function RealMapSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-germany" />;
}
