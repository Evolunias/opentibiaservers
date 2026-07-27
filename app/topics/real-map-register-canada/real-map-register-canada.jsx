import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-canada');
}

export default function RealMapRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-canada" />;
}
