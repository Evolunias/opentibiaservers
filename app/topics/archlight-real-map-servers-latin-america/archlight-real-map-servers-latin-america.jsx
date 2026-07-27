import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-latin-america');
}

export default function ArchlightRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-latin-america" />;
}
