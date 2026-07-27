import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-latin-america');
}

export default function NoxiousotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-latin-america" />;
}
