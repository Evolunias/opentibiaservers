import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-argentina');
}

export default function EvoleraCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-argentina" />;
}
