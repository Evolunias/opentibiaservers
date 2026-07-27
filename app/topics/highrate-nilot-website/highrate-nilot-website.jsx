import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-website');
}

export default function HighrateNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-website" />;
}
