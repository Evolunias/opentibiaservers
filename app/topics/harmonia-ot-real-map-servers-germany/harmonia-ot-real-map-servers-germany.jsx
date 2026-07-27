import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-germany');
}

export default function HarmoniaOtRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-germany" />;
}
