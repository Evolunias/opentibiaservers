import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-sweden');
}

export default function CoxaotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-sweden" />;
}
