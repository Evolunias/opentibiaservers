import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-register');
}

export default function RealMapTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-register" />;
}
