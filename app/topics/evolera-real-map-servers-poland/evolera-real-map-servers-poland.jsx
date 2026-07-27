import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-poland');
}

export default function EvoleraRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-poland" />;
}
