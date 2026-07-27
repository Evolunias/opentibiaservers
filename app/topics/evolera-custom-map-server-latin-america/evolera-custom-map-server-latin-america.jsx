import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-latin-america');
}

export default function EvoleraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-latin-america" />;
}
