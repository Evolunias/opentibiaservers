import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-france');
}

export default function RealMapStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-france" />;
}
