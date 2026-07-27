import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-sweden');
}

export default function CoxaotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-sweden" />;
}
