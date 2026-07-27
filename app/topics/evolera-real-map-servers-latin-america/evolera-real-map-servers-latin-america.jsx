import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-latin-america');
}

export default function EvoleraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-latin-america" />;
}
