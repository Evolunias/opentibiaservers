import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-login');
}

export default function HighrateOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-login" />;
}
