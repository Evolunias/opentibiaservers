import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-forum');
}

export default function BestTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-forum" />;
}
