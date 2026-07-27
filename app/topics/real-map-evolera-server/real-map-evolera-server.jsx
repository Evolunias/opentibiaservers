import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-server');
}

export default function RealMapEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-server" />;
}
