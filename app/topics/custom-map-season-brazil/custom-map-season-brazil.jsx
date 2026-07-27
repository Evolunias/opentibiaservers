import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-brazil');
}

export default function CustomMapSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-brazil" />;
}
