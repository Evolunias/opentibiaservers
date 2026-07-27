import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-south-america');
}

export default function ArchlightCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-south-america" />;
}
