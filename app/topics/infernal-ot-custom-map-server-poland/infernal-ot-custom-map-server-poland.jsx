import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-poland');
}

export default function InfernalOtCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-poland" />;
}
