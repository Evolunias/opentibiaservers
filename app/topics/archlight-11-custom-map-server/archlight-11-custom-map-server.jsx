import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-custom-map-server');
}

export default function Archlight11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-custom-map-server" />;
}
