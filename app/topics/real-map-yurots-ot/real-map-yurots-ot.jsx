import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-ot');
}

export default function RealMapYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-ot" />;
}
