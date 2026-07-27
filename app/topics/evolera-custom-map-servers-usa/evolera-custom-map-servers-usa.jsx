import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-usa');
}

export default function EvoleraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-usa" />;
}
