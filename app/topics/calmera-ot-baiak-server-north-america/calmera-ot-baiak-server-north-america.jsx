import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-north-america');
}

export default function CalmeraOtBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-north-america" />;
}
