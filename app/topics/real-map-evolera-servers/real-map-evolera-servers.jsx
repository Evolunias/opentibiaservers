import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-servers');
}

export default function RealMapEvoleraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-servers" />;
}
