import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-brazil');
}

export default function EmpirebrBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-brazil" />;
}
