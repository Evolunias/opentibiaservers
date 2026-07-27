import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-forum');
}

export default function NewSeasonSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-forum" />;
}
