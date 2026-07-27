import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-uk');
}

export default function RealMapRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-uk" />;
}
