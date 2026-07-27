import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map');
}

export default function EvoleraRealMapKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map" />;
}
