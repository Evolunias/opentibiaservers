import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-mexico');
}

export default function CustomMapSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-mexico" />;
}
