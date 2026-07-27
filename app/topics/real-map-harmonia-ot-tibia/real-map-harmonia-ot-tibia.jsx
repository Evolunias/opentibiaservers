import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-tibia');
}

export default function RealMapHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-tibia" />;
}
