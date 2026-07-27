import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-uk');
}

export default function InfernalOtCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-uk" />;
}
