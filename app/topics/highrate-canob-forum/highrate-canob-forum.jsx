import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-forum');
}

export default function HighrateCanobForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-forum" />;
}
