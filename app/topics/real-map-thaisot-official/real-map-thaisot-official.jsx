import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-official');
}

export default function RealMapThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-official" />;
}
