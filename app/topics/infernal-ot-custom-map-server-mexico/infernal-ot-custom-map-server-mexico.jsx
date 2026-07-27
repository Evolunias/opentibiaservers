import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-mexico');
}

export default function InfernalOtCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-mexico" />;
}
