import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-login');
}

export default function HighrateNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-login" />;
}
