import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-mexico');
}

export default function EvoleraRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-mexico" />;
}
