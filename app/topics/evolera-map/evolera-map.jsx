import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-map');
}

export default function EvoleraMapKeywordPage() {
  return <StaticKeywordPage slug="evolera-map" />;
}
