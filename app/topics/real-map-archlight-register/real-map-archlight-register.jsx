import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-register');
}

export default function RealMapArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-register" />;
}
