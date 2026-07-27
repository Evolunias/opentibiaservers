import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-custom-map-server');
}

export default function CalmeraOt100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-custom-map-server" />;
}
