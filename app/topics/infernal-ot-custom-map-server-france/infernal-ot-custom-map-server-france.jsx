import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-france');
}

export default function InfernalOtCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-france" />;
}
