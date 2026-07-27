import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-custom-map-servers');
}

export default function HarmoniaOt11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-custom-map-servers" />;
}
