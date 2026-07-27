import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-custom-map-server');
}

export default function CalmeraOt11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-custom-map-server" />;
}
