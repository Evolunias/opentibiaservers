import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-north-america');
}

export default function EvoleraRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-north-america" />;
}
