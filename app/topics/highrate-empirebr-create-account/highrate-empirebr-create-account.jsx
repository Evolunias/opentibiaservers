import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-create-account');
}

export default function HighrateEmpirebrCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-create-account" />;
}
