import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-official');
}

export default function RealMapMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-official" />;
}
