import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-custom-map-server');
}

export default function Archlight84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-custom-map-server" />;
}
