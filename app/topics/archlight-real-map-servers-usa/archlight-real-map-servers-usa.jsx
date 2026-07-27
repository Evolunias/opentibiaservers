import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-usa');
}

export default function ArchlightRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-usa" />;
}
