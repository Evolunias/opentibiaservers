import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-usa');
}

export default function EvoleraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-usa" />;
}
