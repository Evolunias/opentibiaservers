import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-official');
}

export default function RealMapBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-official" />;
}
