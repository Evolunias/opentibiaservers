import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-real-map-server');
}

export default function Archlight81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-real-map-server" />;
}
