import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-argentina');
}

export default function ThaisotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-argentina" />;
}
