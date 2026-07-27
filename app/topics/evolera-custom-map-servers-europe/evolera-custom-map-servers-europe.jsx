import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-europe');
}

export default function EvoleraCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-europe" />;
}
