import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-sweden');
}

export default function DuraOnlineRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-sweden" />;
}
