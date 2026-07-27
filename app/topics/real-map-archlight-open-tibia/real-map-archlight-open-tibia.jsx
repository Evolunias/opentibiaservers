import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-open-tibia');
}

export default function RealMapArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-open-tibia" />;
}
