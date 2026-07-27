import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-real-map-server');
}

export default function Archlight80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-real-map-server" />;
}
