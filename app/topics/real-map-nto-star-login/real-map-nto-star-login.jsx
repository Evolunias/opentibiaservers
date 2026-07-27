import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-login');
}

export default function RealMapNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-login" />;
}
