import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-argentina');
}

export default function HarmoniaOtRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-argentina" />;
}
