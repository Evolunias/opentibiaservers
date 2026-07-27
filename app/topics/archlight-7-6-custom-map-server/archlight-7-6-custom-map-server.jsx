import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-custom-map-server');
}

export default function Archlight76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-custom-map-server" />;
}
