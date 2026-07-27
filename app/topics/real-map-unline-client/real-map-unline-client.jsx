import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-client');
}

export default function RealMapUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-client" />;
}
