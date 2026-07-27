import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-forum');
}

export default function TopTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-forum" />;
}
