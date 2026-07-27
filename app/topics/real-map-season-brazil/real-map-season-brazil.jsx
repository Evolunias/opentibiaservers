import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-brazil');
}

export default function RealMapSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-brazil" />;
}
