import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-poland');
}

export default function HarmoniaOtCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-poland" />;
}
