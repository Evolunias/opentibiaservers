import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-france');
}

export default function DuraOnlineRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-france" />;
}
