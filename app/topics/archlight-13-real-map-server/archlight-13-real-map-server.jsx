import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-real-map-server');
}

export default function Archlight13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-real-map-server" />;
}
