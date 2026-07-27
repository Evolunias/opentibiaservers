import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-tibia');
}

export default function RealMapArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-tibia" />;
}
