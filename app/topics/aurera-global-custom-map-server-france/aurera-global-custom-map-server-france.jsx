import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-france');
}

export default function AureraGlobalCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-france" />;
}
