import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-real-map-servers');
}

export default function Archlight14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-real-map-servers" />;
}
