import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-sweden');
}

export default function ArchlightCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-sweden" />;
}
