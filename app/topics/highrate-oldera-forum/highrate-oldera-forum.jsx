import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-forum');
}

export default function HighrateOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-forum" />;
}
