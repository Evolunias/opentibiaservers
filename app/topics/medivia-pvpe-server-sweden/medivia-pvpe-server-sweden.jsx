import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-sweden');
}

export default function MediviaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-sweden" />;
}
