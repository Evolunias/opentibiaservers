import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-argentina');
}

export default function EmpirebrBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-argentina" />;
}
