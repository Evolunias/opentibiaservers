import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-ot');
}

export default function HighrateEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-ot" />;
}
