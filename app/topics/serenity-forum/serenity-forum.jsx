import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-forum');
}

export default function SerenityForumKeywordPage() {
  return <StaticKeywordPage slug="serenity-forum" />;
}
