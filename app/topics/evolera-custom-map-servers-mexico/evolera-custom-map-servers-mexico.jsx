import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-mexico');
}

export default function EvoleraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-mexico" />;
}
