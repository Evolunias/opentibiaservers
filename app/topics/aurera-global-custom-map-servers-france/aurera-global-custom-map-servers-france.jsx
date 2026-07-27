import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-france');
}

export default function AureraGlobalCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-france" />;
}
