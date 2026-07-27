import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-brazil');
}

export default function EvoleraCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-brazil" />;
}
