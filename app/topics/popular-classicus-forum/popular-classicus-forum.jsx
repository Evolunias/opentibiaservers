import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-forum');
}

export default function PopularClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-forum" />;
}
