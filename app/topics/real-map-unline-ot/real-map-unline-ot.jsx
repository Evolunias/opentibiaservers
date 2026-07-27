import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-ot');
}

export default function RealMapUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-ot" />;
}
