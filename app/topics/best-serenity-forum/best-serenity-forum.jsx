import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-forum');
}

export default function BestSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-forum" />;
}
