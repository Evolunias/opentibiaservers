import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-argentina');
}

export default function EvoleraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-argentina" />;
}
