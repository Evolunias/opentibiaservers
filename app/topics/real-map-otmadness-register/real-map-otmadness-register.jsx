import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-register');
}

export default function RealMapOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-register" />;
}
