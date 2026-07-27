import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-uk');
}

export default function EvoleraCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-uk" />;
}
