import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-custom-map-server');
}

export default function HarmoniaOt15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-custom-map-server" />;
}
