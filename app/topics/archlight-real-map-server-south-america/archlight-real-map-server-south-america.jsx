import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-south-america');
}

export default function ArchlightRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-south-america" />;
}
