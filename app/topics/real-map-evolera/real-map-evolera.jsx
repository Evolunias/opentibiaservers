import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera');
}

export default function RealMapEvoleraKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera" />;
}
