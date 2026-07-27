import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-canada');
}

export default function InfernalOtCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-canada" />;
}
