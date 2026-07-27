import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-open-tibia');
}

export default function RealMapDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-open-tibia" />;
}
