import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-usa');
}

export default function ThaisotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-usa" />;
}
