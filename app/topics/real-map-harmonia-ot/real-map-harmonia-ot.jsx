import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot');
}

export default function RealMapHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot" />;
}
