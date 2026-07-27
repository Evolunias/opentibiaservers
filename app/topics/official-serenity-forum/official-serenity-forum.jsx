import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-forum');
}

export default function OfficialSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-forum" />;
}
