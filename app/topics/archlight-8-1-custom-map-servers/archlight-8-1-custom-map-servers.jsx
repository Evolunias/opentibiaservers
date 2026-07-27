import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-custom-map-servers');
}

export default function Archlight81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-custom-map-servers" />;
}
