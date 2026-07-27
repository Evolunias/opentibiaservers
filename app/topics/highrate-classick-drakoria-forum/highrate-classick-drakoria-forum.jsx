import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-forum');
}

export default function HighrateClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-forum" />;
}
