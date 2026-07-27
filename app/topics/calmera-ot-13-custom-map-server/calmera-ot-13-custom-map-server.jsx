import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-custom-map-server');
}

export default function CalmeraOt13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-custom-map-server" />;
}
