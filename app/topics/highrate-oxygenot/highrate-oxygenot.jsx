import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot');
}

export default function HighrateOxygenotKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot" />;
}
