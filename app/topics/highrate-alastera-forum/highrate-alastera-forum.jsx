import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-forum');
}

export default function HighrateAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-forum" />;
}
