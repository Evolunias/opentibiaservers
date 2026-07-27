import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-register');
}

export default function RealMapCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-register" />;
}
