import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-server');
}

export default function RealMapUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-server" />;
}
