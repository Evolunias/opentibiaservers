import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-custom-map-servers');
}

export default function CalmeraOt1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-custom-map-servers" />;
}
