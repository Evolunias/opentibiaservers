import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-website');
}

export default function RealMapMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-website" />;
}
