import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-latin-america');
}

export default function EmpirebrBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-latin-america" />;
}
