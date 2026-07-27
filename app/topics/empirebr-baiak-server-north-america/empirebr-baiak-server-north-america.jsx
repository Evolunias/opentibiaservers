import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-north-america');
}

export default function EmpirebrBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-north-america" />;
}
