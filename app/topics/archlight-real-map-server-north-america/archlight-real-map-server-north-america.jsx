import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-north-america');
}

export default function ArchlightRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-north-america" />;
}
