import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-custom-map-servers');
}

export default function HarmoniaOt15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-custom-map-servers" />;
}
