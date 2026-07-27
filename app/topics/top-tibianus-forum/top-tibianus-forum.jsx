import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-forum');
}

export default function TopTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-forum" />;
}
