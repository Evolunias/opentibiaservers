import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-real-map-server');
}

export default function Archlight71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-real-map-server" />;
}
