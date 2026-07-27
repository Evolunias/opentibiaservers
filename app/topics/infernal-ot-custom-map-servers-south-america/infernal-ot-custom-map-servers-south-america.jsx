import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-south-america');
}

export default function InfernalOtCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-south-america" />;
}
