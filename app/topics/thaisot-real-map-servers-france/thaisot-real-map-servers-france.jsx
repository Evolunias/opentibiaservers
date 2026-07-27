import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-france');
}

export default function ThaisotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-france" />;
}
