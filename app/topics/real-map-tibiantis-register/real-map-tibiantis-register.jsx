import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-register');
}

export default function RealMapTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-register" />;
}
