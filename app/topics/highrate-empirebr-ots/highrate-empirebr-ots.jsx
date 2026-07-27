import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-ots');
}

export default function HighrateEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-ots" />;
}
