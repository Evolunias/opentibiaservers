import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-europe');
}

export default function InfernalOtCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-europe" />;
}
