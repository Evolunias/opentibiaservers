import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-forum');
}

export default function HighrateClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-forum" />;
}
