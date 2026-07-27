import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-forum');
}

export default function LowrateSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-forum" />;
}
