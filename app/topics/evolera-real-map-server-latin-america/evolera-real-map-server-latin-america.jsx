import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-latin-america');
}

export default function EvoleraRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-latin-america" />;
}
