import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-ots');
}

export default function RealMapUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-ots" />;
}
