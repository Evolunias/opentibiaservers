import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-ot');
}

export default function RealMapDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-ot" />;
}
