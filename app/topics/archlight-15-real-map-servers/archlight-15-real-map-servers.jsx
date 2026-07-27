import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-real-map-servers');
}

export default function Archlight15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-real-map-servers" />;
}
