import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-canada');
}

export default function EvoleraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-canada" />;
}
