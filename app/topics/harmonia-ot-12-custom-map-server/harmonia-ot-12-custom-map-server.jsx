import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-custom-map-server');
}

export default function HarmoniaOt12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-custom-map-server" />;
}
