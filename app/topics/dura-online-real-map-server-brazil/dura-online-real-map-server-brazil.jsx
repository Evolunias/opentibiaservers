import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-brazil');
}

export default function DuraOnlineRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-brazil" />;
}
