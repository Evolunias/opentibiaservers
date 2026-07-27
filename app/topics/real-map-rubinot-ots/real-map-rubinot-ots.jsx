import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-ots');
}

export default function RealMapRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-ots" />;
}
