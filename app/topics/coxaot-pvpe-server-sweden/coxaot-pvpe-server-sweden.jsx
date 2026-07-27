import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-sweden');
}

export default function CoxaotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-sweden" />;
}
