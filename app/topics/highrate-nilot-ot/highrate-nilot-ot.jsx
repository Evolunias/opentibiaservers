import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-ot');
}

export default function HighrateNilotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-ot" />;
}
