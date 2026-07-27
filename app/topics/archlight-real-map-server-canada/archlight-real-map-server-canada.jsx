import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-canada');
}

export default function ArchlightRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-canada" />;
}
