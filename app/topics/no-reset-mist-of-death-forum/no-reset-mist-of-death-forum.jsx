import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-forum');
}

export default function NoResetMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-forum" />;
}
