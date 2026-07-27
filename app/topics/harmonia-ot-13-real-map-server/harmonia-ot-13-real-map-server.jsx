import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-real-map-server');
}

export default function HarmoniaOt13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-real-map-server" />;
}
