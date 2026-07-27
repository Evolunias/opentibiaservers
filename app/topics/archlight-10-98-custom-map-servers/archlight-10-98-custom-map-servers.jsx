import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-custom-map-servers');
}

export default function Archlight1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-custom-map-servers" />;
}
