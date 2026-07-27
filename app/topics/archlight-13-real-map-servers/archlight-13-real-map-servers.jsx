import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-real-map-servers');
}

export default function Archlight13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-real-map-servers" />;
}
