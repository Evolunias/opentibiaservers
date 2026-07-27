import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-official');
}

export default function RealMapCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-official" />;
}
