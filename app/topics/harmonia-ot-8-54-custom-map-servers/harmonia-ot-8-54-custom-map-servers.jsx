import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-custom-map-servers');
}

export default function HarmoniaOt854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-custom-map-servers" />;
}
