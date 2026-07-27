import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-custom-map-servers');
}

export default function Archlight13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-custom-map-servers" />;
}
