import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-ots');
}

export default function RealMapEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-ots" />;
}
