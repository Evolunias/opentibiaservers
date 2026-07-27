import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-official');
}

export default function RealMapHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-official" />;
}
