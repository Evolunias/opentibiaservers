import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-usa');
}

export default function CalmeraOtBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-usa" />;
}
