import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-north-america');
}

export default function ArchlightCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-north-america" />;
}
