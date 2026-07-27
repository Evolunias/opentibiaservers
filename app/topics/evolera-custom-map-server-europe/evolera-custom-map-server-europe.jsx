import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-europe');
}

export default function EvoleraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-europe" />;
}
