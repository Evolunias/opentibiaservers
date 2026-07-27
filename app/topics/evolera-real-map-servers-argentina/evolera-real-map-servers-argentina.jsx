import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-argentina');
}

export default function EvoleraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-argentina" />;
}
