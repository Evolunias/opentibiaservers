import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-custom-map-server');
}

export default function HarmoniaOt71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-custom-map-server" />;
}
