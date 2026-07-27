import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-europe');
}

export default function CustomMapSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-europe" />;
}
