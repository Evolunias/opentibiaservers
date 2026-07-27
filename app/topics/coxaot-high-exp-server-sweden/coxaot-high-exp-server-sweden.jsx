import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-sweden');
}

export default function CoxaotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-sweden" />;
}
