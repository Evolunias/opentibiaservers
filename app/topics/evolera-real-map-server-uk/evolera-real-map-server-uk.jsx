import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-uk');
}

export default function EvoleraRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-uk" />;
}
