import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-custom-map-servers');
}

export default function Archlight96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-custom-map-servers" />;
}
