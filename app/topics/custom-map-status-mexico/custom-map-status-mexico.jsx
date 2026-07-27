import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-mexico');
}

export default function CustomMapStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-mexico" />;
}
