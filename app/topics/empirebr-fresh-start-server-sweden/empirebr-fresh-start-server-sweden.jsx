import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-sweden');
}

export default function EmpirebrFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-sweden" />;
}
