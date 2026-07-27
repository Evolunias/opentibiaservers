import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-custom-map-servers');
}

export default function Archlight71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-custom-map-servers" />;
}
