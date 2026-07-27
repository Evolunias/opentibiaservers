import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-ots');
}

export default function LowrateEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-ots" />;
}
