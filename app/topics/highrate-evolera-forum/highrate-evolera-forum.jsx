import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-forum');
}

export default function HighrateEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-forum" />;
}
