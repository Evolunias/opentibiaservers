import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-north-america');
}

export default function EvoleraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-north-america" />;
}
