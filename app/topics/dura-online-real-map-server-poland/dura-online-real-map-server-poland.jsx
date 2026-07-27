import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-poland');
}

export default function DuraOnlineRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-poland" />;
}
