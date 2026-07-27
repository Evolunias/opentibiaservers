import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-argentina');
}

export default function HarmoniaOtRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-argentina" />;
}
