import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-north-america');
}

export default function InfernalOtCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-north-america" />;
}
