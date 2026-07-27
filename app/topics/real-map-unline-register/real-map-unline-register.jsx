import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-register');
}

export default function RealMapUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-register" />;
}
