import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-germany');
}

export default function HarmoniaOtRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-germany" />;
}
