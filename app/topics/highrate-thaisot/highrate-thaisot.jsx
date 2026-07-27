import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot');
}

export default function HighrateThaisotKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot" />;
}
