import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-latin-america');
}

export default function ArchlightRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-latin-america" />;
}
