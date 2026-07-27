import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-poland');
}

export default function EmpirebrBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-poland" />;
}
