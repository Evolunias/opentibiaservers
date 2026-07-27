import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-latin-america');
}

export default function InfernalOtCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-latin-america" />;
}
