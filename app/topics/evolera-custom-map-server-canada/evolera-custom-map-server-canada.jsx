import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-canada');
}

export default function EvoleraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-canada" />;
}
