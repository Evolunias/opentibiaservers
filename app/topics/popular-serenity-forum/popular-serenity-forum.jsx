import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-forum');
}

export default function PopularSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-forum" />;
}
