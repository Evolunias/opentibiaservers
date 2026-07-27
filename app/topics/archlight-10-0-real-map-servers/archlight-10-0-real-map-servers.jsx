import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-real-map-servers');
}

export default function Archlight100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-real-map-servers" />;
}
