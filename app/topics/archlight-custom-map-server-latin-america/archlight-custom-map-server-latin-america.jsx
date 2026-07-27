import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-latin-america');
}

export default function ArchlightCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-latin-america" />;
}
