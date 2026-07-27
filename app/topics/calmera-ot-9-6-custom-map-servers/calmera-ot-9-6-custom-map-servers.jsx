import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-custom-map-servers');
}

export default function CalmeraOt96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-custom-map-servers" />;
}
