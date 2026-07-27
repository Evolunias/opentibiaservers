import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-brazil');
}

export default function HarmoniaOtRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-brazil" />;
}
