import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-ot-server');
}

export default function HighrateNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-ot-server" />;
}
