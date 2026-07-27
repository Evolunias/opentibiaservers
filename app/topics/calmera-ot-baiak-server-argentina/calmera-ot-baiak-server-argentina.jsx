import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-argentina');
}

export default function CalmeraOtBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-argentina" />;
}
