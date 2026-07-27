import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-south-america');
}

export default function ArchlightRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-south-america" />;
}
