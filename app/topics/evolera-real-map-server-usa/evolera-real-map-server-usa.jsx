import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-usa');
}

export default function EvoleraRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-usa" />;
}
