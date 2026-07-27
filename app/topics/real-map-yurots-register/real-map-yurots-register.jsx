import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-register');
}

export default function RealMapYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-register" />;
}
