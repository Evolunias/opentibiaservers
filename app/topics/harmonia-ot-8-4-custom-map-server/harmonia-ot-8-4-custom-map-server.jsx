import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-custom-map-server');
}

export default function HarmoniaOt84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-custom-map-server" />;
}
