import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-register');
}

export default function RealMapTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-register" />;
}
