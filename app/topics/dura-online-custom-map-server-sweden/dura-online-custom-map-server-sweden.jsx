import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-sweden');
}

export default function DuraOnlineCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-sweden" />;
}
