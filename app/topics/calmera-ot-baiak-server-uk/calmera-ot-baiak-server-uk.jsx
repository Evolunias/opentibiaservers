import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-uk');
}

export default function CalmeraOtBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-uk" />;
}
