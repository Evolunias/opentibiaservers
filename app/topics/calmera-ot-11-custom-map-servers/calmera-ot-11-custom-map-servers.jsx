import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-custom-map-servers');
}

export default function CalmeraOt11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-custom-map-servers" />;
}
