import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-poland');
}

export default function HarmoniaOtCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-poland" />;
}
