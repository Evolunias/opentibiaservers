import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-france');
}

export default function EvoleraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-france" />;
}
