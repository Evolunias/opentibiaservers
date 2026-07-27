import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-official');
}

export default function RealMapInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-official" />;
}
