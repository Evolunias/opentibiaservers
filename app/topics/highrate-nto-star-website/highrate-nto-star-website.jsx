import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-website');
}

export default function HighrateNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-website" />;
}
