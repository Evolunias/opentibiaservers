import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-custom-map-servers');
}

export default function HarmoniaOt96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-custom-map-servers" />;
}
