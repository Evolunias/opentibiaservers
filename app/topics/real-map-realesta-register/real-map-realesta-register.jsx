import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-register');
}

export default function RealMapRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-register" />;
}
