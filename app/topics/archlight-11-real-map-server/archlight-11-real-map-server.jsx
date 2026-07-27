import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-real-map-server');
}

export default function Archlight11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-real-map-server" />;
}
