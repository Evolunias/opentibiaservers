import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-register');
}

export default function HighrateAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-register" />;
}
