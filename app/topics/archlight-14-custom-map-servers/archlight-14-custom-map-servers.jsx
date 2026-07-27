import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-custom-map-servers');
}

export default function Archlight14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-custom-map-servers" />;
}
