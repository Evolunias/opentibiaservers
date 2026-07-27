import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-ot');
}

export default function RealMapOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-ot" />;
}
