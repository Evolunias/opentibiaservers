import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-france');
}

export default function ArchlightCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-france" />;
}
