import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-usa');
}

export default function DuraOnlineRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-usa" />;
}
