import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-usa');
}

export default function ThaisotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-usa" />;
}
