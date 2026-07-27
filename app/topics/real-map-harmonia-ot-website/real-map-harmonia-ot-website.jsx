import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-website');
}

export default function RealMapHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-website" />;
}
