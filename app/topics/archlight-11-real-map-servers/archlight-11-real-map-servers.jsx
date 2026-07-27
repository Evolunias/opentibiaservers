import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-real-map-servers');
}

export default function Archlight11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-real-map-servers" />;
}
