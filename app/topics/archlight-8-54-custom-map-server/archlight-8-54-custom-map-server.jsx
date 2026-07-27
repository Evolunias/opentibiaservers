import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-custom-map-server');
}

export default function Archlight854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-custom-map-server" />;
}
