import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-latin-america');
}

export default function RealMapStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-latin-america" />;
}
