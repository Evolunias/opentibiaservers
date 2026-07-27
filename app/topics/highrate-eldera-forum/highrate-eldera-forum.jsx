import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-forum');
}

export default function HighrateElderaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-forum" />;
}
