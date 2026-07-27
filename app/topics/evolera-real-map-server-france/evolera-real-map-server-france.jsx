import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-france');
}

export default function EvoleraRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-france" />;
}
