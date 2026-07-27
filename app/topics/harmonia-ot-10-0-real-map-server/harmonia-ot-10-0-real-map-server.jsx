import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-real-map-server');
}

export default function HarmoniaOt100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-real-map-server" />;
}
