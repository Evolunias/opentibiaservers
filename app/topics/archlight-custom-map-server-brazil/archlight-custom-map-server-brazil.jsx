import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-brazil');
}

export default function ArchlightCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-brazil" />;
}
