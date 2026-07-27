import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-north-america');
}

export default function ArchlightCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-north-america" />;
}
