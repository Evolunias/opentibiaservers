import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-germany');
}

export default function DuraOnlineRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-germany" />;
}
