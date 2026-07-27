import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-official');
}

export default function RealMapRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-official" />;
}
