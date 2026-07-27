import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-latin-america');
}

export default function ThaisotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-latin-america" />;
}
