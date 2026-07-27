import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-register');
}

export default function HighrateYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-register" />;
}
