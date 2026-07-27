import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-uk');
}

export default function HarmoniaOtRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-uk" />;
}
