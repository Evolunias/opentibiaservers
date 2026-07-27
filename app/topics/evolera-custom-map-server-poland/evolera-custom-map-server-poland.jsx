import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-poland');
}

export default function EvoleraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-poland" />;
}
