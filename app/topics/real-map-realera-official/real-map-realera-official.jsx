import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-official');
}

export default function RealMapRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-official" />;
}
