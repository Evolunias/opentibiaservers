import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-ots');
}

export default function RealMapHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-ots" />;
}
