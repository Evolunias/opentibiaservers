import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-poland');
}

export default function HarmoniaOtRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-poland" />;
}
