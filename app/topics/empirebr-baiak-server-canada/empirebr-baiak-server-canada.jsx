import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-canada');
}

export default function EmpirebrBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-canada" />;
}
