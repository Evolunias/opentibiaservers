import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-brazil');
}

export default function EvoleraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-brazil" />;
}
