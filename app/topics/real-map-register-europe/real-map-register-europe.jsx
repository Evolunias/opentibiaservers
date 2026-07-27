import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-europe');
}

export default function RealMapRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-europe" />;
}
