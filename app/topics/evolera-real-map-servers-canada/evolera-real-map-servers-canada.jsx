import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-canada');
}

export default function EvoleraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-canada" />;
}
