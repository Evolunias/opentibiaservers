import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-ots');
}

export default function EmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-ots" />;
}
