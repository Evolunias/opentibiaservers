import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-real-map-servers');
}

export default function Archlight1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-real-map-servers" />;
}
