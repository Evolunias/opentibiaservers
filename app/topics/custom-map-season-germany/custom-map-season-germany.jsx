import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-germany');
}

export default function CustomMapSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-germany" />;
}
