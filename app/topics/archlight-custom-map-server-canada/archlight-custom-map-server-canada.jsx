import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-canada');
}

export default function ArchlightCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-canada" />;
}
