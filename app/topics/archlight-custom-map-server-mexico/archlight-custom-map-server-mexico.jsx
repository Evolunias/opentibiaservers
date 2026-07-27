import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-mexico');
}

export default function ArchlightCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-mexico" />;
}
