import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-uk');
}

export default function DuraOnlineRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-uk" />;
}
