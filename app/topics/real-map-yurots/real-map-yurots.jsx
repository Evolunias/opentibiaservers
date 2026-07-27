import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots');
}

export default function RealMapYurotsKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots" />;
}
