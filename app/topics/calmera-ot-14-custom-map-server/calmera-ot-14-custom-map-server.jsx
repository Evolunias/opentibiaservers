import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-custom-map-server');
}

export default function CalmeraOt14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-custom-map-server" />;
}
