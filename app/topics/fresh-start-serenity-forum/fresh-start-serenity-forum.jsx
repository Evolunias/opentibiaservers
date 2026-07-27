import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-forum');
}

export default function FreshStartSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-forum" />;
}
