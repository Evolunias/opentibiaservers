import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-germany');
}

export default function EvoleraRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-germany" />;
}
