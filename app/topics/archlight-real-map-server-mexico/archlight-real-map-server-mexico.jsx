import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-mexico');
}

export default function ArchlightRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-mexico" />;
}
