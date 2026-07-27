import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-real-map-server');
}

export default function HarmoniaOt80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-real-map-server" />;
}
