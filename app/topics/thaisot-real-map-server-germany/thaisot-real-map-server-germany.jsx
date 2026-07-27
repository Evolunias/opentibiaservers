import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-germany');
}

export default function ThaisotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-germany" />;
}
