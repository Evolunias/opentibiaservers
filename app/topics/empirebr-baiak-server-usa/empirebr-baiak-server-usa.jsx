import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-usa');
}

export default function EmpirebrBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-usa" />;
}
