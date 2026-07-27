import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-1-custom-map-servers');
}

export default function CalmeraOt81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-1-custom-map-servers" />;
}
