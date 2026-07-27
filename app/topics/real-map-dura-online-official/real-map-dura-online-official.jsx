import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-official');
}

export default function RealMapDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-official" />;
}
