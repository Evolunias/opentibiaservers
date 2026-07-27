import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-custom-map-server');
}

export default function CalmeraOt84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-custom-map-server" />;
}
