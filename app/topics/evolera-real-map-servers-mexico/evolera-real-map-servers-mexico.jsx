import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-mexico');
}

export default function EvoleraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-mexico" />;
}
