import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-forum');
}

export default function NoResetSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-forum" />;
}
