import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-uk');
}

export default function EvoleraRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-uk" />;
}
