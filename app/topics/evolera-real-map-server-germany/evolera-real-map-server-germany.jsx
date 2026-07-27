import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-germany');
}

export default function EvoleraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-germany" />;
}
