import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-latin-america');
}

export default function CustomMapStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-latin-america" />;
}
