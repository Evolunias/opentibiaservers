import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-ot');
}

export default function RealMapCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-ot" />;
}
