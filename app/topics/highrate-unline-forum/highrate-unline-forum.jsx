import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-forum');
}

export default function HighrateUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-forum" />;
}
