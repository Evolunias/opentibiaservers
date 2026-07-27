import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-germany');
}

export default function RealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-germany" />;
}
