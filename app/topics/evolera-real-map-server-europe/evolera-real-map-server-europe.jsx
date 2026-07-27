import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-europe');
}

export default function EvoleraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-europe" />;
}
