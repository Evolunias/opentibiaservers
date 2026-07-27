import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-website');
}

export default function HighrateYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-website" />;
}
