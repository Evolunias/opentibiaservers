import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-mexico');
}

export default function EmpirebrBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-mexico" />;
}
