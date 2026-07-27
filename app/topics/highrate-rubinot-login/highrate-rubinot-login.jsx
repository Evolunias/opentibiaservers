import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-login');
}

export default function HighrateRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-login" />;
}
