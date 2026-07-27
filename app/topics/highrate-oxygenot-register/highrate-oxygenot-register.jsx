import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-register');
}

export default function HighrateOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-register" />;
}
