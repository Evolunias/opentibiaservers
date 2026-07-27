import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-north-america');
}

export default function ArchlightRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-north-america" />;
}
