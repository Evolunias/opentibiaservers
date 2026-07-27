import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-usa');
}

export default function DuraOnlineRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-usa" />;
}
