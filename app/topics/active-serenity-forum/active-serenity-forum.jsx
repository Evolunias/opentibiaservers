import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-forum');
}

export default function ActiveSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-forum" />;
}
