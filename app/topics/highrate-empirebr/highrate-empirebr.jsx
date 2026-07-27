import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr');
}

export default function HighrateEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr" />;
}
