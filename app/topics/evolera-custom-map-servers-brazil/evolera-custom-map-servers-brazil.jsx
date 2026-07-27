import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-brazil');
}

export default function EvoleraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-brazil" />;
}
