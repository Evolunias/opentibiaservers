import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-custom-map-servers');
}

export default function HarmoniaOt13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-custom-map-servers" />;
}
