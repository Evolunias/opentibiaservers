import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia');
}

export default function RealMapMediviaKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia" />;
}
