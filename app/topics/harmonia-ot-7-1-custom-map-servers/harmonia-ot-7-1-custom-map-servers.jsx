import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-custom-map-servers');
}

export default function HarmoniaOt71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-custom-map-servers" />;
}
