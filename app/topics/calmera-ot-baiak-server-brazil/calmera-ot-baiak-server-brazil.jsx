import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-brazil');
}

export default function CalmeraOtBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-brazil" />;
}
