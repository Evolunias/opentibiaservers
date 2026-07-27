import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-canada');
}

export default function ArchlightRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-canada" />;
}
