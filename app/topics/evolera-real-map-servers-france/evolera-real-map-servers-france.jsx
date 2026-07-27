import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-france');
}

export default function EvoleraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-france" />;
}
