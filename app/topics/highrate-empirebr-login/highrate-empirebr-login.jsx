import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-login');
}

export default function HighrateEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-login" />;
}
