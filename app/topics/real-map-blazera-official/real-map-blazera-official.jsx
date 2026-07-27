import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-official');
}

export default function RealMapBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-official" />;
}
