import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-real-map-servers');
}

export default function Archlight74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-real-map-servers" />;
}
