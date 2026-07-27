import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-poland');
}

export default function InfernalOtCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-poland" />;
}
