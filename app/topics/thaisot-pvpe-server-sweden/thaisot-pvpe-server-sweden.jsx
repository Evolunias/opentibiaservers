import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-sweden');
}

export default function ThaisotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-sweden" />;
}
