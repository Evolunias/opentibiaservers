import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-client');
}

export default function RealMapEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-client" />;
}
