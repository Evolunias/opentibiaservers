import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-custom-map-server');
}

export default function Archlight100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-custom-map-server" />;
}
