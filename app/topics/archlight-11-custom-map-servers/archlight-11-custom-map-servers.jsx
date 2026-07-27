import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-custom-map-servers');
}

export default function Archlight11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-custom-map-servers" />;
}
