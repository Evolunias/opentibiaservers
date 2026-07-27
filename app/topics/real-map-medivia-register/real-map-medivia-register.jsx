import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-register');
}

export default function RealMapMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-register" />;
}
