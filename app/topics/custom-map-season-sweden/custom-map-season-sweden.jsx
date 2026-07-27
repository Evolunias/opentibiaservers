import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-sweden');
}

export default function CustomMapSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-sweden" />;
}
