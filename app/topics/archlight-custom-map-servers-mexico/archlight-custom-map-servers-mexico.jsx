import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-mexico');
}

export default function ArchlightCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-mexico" />;
}
