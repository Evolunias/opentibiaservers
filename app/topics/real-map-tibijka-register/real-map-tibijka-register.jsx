import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-register');
}

export default function RealMapTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-register" />;
}
