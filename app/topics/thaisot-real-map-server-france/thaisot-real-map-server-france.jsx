import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-france');
}

export default function ThaisotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-france" />;
}
