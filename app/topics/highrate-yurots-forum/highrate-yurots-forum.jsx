import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-forum');
}

export default function HighrateYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-forum" />;
}
