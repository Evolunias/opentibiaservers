import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-forum');
}

export default function CurrentSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-forum" />;
}
