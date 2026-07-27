import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-usa');
}

export default function ArchlightCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-usa" />;
}
