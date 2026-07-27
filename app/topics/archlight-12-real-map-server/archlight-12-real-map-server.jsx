import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-real-map-server');
}

export default function Archlight12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-real-map-server" />;
}
