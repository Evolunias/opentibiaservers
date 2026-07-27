import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-server');
}

export default function HighrateNilotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-server" />;
}
