import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-europe');
}

export default function HarmoniaOtCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-europe" />;
}
