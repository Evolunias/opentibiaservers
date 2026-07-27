import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-custom-map-servers');
}

export default function CalmeraOt14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-custom-map-servers" />;
}
