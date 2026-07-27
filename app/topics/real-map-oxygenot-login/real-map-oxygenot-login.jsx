import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-login');
}

export default function RealMapOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-login" />;
}
