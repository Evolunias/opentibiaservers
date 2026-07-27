import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-custom-map-server');
}

export default function HarmoniaOt11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-custom-map-server" />;
}
