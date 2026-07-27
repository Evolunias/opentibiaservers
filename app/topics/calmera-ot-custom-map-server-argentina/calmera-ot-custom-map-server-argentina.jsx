import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-argentina');
}

export default function CalmeraOtCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-argentina" />;
}
