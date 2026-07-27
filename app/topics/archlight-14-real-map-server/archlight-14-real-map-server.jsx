import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-real-map-server');
}

export default function Archlight14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-real-map-server" />;
}
