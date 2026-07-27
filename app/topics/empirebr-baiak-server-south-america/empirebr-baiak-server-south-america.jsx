import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-south-america');
}

export default function EmpirebrBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-south-america" />;
}
