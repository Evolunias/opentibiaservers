import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-login');
}

export default function HighrateYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-login" />;
}
