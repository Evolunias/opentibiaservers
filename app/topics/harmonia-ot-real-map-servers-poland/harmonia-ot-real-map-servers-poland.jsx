import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-poland');
}

export default function HarmoniaOtRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-poland" />;
}
