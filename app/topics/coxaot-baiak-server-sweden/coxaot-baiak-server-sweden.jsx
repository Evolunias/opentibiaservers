import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-sweden');
}

export default function CoxaotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-sweden" />;
}
