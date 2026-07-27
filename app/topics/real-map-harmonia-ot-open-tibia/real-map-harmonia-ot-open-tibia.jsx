import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-open-tibia');
}

export default function RealMapHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-open-tibia" />;
}
