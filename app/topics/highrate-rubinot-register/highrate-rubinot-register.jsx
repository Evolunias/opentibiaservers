import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-register');
}

export default function HighrateRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-register" />;
}
