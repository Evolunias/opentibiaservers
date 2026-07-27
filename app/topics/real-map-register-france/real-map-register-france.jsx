import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-france');
}

export default function RealMapRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-france" />;
}
