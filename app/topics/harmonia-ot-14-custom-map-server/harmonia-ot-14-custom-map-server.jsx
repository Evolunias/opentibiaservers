import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-custom-map-server');
}

export default function HarmoniaOt14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-custom-map-server" />;
}
