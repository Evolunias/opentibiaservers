import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-real-map-server');
}

export default function HarmoniaOt15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-real-map-server" />;
}
