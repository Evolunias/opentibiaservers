import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-argentina');
}

export default function DuraOnlineRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-argentina" />;
}
