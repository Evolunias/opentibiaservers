import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-custom-map-servers');
}

export default function CalmeraOt13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-custom-map-servers" />;
}
