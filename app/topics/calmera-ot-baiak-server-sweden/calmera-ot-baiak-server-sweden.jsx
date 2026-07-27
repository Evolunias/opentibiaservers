import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-sweden');
}

export default function CalmeraOtBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-sweden" />;
}
