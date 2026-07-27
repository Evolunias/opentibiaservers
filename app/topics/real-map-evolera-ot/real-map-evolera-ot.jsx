import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-ot');
}

export default function RealMapEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-ot" />;
}
