import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-france');
}

export default function CalmeraOtBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-france" />;
}
