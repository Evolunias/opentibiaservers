import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-argentina');
}

export default function ArchlightRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-argentina" />;
}
