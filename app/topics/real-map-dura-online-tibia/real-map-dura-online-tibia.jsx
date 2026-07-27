import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-tibia');
}

export default function RealMapDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-tibia" />;
}
