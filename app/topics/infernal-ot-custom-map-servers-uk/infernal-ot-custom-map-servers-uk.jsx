import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-uk');
}

export default function InfernalOtCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-uk" />;
}
