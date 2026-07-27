import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-login');
}

export default function RealMapArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-login" />;
}
