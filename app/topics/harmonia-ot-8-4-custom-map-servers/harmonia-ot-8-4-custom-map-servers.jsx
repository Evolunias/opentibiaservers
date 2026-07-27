import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-custom-map-servers');
}

export default function HarmoniaOt84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-custom-map-servers" />;
}
