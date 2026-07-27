import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-forum');
}

export default function HighrateSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-forum" />;
}
