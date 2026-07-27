import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-brazil');
}

export default function EvoleraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-brazil" />;
}
