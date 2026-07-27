import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-usa');
}

export default function RealMapRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-usa" />;
}
