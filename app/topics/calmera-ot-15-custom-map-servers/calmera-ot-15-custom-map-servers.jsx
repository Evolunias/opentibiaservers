import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-custom-map-servers');
}

export default function CalmeraOt15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-custom-map-servers" />;
}
