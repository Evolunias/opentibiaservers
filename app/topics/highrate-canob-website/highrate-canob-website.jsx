import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-website');
}

export default function HighrateCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-website" />;
}
