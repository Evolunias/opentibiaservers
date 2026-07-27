import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-real-map-servers');
}

export default function Archlight86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-real-map-servers" />;
}
