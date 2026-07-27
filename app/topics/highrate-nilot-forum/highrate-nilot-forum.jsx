import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-forum');
}

export default function HighrateNilotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-forum" />;
}
