import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-forum');
}

export default function NewSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-forum" />;
}
