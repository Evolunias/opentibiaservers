import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-ot');
}

export default function RealMapMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-ot" />;
}
