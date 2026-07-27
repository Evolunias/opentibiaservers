import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-argentina');
}

export default function ThaisotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-argentina" />;
}
