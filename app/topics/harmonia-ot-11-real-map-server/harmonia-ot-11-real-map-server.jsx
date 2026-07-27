import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-real-map-server');
}

export default function HarmoniaOt11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-real-map-server" />;
}
