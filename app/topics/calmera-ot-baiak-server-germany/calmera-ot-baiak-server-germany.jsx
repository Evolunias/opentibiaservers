import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-germany');
}

export default function CalmeraOtBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-germany" />;
}
