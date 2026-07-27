import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-latin-america');
}

export default function InfernalOtCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-latin-america" />;
}
