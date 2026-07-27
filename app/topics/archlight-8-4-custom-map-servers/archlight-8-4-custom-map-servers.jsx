import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-custom-map-servers');
}

export default function Archlight84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-custom-map-servers" />;
}
