import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-latin-america');
}

export default function EvoleraCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-latin-america" />;
}
