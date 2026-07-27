import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-ots');
}

export default function RealMapOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-ots" />;
}
