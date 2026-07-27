import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot');
}

export default function HighrateNilotKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot" />;
}
