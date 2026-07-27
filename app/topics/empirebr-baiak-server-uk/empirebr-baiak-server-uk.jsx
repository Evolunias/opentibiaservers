import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-uk');
}

export default function EmpirebrBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-uk" />;
}
