import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-custom-map-server');
}

export default function HarmoniaOt81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-custom-map-server" />;
}
