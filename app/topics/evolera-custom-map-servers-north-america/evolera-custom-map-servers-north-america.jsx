import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-north-america');
}

export default function EvoleraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-north-america" />;
}
