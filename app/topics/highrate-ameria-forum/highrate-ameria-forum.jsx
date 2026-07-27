import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-forum');
}

export default function HighrateAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-forum" />;
}
