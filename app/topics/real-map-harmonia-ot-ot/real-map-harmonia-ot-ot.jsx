import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-ot');
}

export default function RealMapHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-ot" />;
}
