import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-mexico');
}

export default function DuraOnlineRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-mexico" />;
}
