import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-custom-map-server');
}

export default function HarmoniaOt86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-custom-map-server" />;
}
