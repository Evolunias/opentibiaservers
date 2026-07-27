import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-real-map-server');
}

export default function HarmoniaOt86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-real-map-server" />;
}
