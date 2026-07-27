import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-canada');
}

export default function CalmeraOtBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-canada" />;
}
