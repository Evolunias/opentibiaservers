import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-real-map-server');
}

export default function HarmoniaOt772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-real-map-server" />;
}
