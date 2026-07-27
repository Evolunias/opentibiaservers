import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-france');
}

export default function EvoleraCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-france" />;
}
