import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-sweden');
}

export default function CalmeraOtPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-sweden" />;
}
