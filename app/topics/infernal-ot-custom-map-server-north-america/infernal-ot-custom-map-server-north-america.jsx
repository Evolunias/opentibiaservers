import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-north-america');
}

export default function InfernalOtCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-north-america" />;
}
