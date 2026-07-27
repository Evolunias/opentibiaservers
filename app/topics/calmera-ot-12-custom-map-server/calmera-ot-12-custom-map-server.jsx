import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-custom-map-server');
}

export default function CalmeraOt12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-custom-map-server" />;
}
