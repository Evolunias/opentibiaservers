import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-south-america');
}

export default function InfernalOtCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-south-america" />;
}
