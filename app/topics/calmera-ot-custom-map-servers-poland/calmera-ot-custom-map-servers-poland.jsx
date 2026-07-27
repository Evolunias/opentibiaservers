import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-poland');
}

export default function CalmeraOtCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-poland" />;
}
