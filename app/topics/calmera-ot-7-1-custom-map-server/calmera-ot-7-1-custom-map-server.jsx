import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-custom-map-server');
}

export default function CalmeraOt71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-custom-map-server" />;
}
