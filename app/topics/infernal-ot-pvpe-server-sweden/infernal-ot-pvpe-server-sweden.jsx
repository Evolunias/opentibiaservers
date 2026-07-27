import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-sweden');
}

export default function InfernalOtPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-sweden" />;
}
