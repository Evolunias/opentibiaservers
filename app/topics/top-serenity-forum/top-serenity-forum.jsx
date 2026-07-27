import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-forum');
}

export default function TopSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-forum" />;
}
