import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-sweden');
}

export default function ArchlightRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-sweden" />;
}
