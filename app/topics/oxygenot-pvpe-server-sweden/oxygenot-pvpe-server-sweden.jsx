import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-sweden');
}

export default function OxygenotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-sweden" />;
}
