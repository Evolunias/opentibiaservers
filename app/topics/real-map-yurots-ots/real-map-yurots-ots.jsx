import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-ots');
}

export default function RealMapYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-ots" />;
}
