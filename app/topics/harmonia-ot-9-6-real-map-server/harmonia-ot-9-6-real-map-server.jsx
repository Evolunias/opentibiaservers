import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-real-map-server');
}

export default function HarmoniaOt96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-real-map-server" />;
}
