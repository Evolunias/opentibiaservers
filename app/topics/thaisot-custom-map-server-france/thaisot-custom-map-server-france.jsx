import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-france');
}

export default function ThaisotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-france" />;
}
