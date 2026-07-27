import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-sweden');
}

export default function EmpirebrBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-sweden" />;
}
