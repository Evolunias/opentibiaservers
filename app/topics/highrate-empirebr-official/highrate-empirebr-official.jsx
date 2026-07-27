import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-official');
}

export default function HighrateEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-official" />;
}
