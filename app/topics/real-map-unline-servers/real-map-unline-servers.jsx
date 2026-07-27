import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-servers');
}

export default function RealMapUnlineServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-servers" />;
}
