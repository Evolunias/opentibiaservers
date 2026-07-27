import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-argentina');
}

export default function ArchlightCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-argentina" />;
}
