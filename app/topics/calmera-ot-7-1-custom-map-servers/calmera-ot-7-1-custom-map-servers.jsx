import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-custom-map-servers');
}

export default function CalmeraOt71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-custom-map-servers" />;
}
