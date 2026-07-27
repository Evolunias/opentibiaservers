import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-real-map-server');
}

export default function HarmoniaOt84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-real-map-server" />;
}
