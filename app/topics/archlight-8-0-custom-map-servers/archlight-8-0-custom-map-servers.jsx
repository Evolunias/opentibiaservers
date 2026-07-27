import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-custom-map-servers');
}

export default function Archlight80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-custom-map-servers" />;
}
