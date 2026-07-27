import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-real-map-server');
}

export default function HarmoniaOt12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-real-map-server" />;
}
