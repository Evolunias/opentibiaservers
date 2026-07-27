import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-argentina');
}

export default function EvoleraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-argentina" />;
}
