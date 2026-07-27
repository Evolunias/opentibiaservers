import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-custom-map-servers');
}

export default function HarmoniaOt100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-custom-map-servers" />;
}
