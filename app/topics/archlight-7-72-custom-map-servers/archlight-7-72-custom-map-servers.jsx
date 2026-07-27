import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-custom-map-servers');
}

export default function Archlight772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-custom-map-servers" />;
}
