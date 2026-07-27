import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-mexico');
}

export default function EvoleraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-mexico" />;
}
