import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-canada');
}

export default function EvoleraCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-canada" />;
}
