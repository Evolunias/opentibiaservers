import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-login');
}

export default function RealMapYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-login" />;
}
