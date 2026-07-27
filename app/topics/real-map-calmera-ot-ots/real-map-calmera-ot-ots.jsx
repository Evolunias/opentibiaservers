import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-ots');
}

export default function RealMapCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-ots" />;
}
