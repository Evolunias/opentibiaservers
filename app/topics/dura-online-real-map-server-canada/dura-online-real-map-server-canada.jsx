import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-canada');
}

export default function DuraOnlineRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-canada" />;
}
