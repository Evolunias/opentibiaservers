import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-real-map-servers');
}

export default function Archlight772RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-real-map-servers" />;
}
