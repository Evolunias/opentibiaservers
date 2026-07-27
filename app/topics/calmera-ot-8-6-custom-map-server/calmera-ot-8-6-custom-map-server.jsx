import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-custom-map-server');
}

export default function CalmeraOt86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-custom-map-server" />;
}
