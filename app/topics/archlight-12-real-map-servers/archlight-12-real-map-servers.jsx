import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-real-map-servers');
}

export default function Archlight12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-real-map-servers" />;
}
