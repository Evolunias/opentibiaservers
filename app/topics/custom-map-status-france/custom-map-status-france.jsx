import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-france');
}

export default function CustomMapStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-france" />;
}
