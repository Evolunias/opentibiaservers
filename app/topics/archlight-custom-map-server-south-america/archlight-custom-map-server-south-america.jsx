import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-south-america');
}

export default function ArchlightCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-south-america" />;
}
