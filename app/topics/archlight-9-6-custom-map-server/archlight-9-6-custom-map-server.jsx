import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-custom-map-server');
}

export default function Archlight96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-custom-map-server" />;
}
