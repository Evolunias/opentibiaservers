import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-custom-map-server');
}

export default function HarmoniaOt13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-custom-map-server" />;
}
