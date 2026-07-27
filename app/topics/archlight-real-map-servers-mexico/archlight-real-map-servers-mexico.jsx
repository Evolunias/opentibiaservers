import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-mexico');
}

export default function ArchlightRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-mexico" />;
}
