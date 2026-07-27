import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-official');
}

export default function HighrateNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-official" />;
}
