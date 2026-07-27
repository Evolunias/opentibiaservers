import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-client');
}

export default function RealMapYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-client" />;
}
