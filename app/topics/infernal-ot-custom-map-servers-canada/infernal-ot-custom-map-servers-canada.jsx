import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-canada');
}

export default function InfernalOtCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-canada" />;
}
