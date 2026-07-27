import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-real-map-server');
}

export default function Archlight74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-real-map-server" />;
}
