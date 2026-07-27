import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-argentina');
}

export default function ArchlightCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-argentina" />;
}
