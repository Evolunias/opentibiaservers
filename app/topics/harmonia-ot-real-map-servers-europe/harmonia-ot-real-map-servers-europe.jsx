import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-europe');
}

export default function HarmoniaOtRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-europe" />;
}
