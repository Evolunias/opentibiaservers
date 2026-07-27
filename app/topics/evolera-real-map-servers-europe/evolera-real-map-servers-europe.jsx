import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-europe');
}

export default function EvoleraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-europe" />;
}
