import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-usa');
}

export default function ArchlightRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-usa" />;
}
