import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-latin-america');
}

export default function CalmeraOtBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-latin-america" />;
}
