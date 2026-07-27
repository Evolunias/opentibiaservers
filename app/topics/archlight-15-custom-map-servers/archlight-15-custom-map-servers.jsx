import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-custom-map-servers');
}

export default function Archlight15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-custom-map-servers" />;
}
