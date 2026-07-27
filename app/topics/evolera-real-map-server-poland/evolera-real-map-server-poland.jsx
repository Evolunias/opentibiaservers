import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-poland');
}

export default function EvoleraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-poland" />;
}
