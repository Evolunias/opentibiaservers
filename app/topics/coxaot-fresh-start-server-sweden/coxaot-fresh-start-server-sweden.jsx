import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-sweden');
}

export default function CoxaotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-sweden" />;
}
