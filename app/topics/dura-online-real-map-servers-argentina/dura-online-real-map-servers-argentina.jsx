import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-argentina');
}

export default function DuraOnlineRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-argentina" />;
}
