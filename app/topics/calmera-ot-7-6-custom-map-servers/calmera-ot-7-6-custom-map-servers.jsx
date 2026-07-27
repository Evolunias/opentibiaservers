import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-custom-map-servers');
}

export default function CalmeraOt76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-custom-map-servers" />;
}
