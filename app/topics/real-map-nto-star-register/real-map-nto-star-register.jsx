import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-register');
}

export default function RealMapNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-register" />;
}
