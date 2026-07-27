import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-mexico');
}

export default function RealMapRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-mexico" />;
}
