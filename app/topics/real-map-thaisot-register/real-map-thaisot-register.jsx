import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-register');
}

export default function RealMapThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-register" />;
}
