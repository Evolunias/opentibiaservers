import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-poland');
}

export default function RealMapRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-poland" />;
}
