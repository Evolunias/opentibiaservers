import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-custom-map-server');
}

export default function Archlight86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-custom-map-server" />;
}
