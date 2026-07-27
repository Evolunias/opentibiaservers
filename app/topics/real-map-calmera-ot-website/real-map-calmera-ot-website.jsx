import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-website');
}

export default function RealMapCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-website" />;
}
