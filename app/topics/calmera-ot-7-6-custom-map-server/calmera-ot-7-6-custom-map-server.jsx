import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-custom-map-server');
}

export default function CalmeraOt76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-custom-map-server" />;
}
