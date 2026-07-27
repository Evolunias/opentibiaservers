import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-forum');
}

export default function CustomSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-forum" />;
}
