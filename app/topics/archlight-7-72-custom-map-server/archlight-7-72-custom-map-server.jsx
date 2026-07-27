import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-custom-map-server');
}

export default function Archlight772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-custom-map-server" />;
}
