import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-germany');
}

export default function EmpirebrBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-germany" />;
}
