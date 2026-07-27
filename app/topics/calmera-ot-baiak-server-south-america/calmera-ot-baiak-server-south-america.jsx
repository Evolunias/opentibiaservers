import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-south-america');
}

export default function CalmeraOtBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-south-america" />;
}
