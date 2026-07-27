import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-forum');
}

export default function NoResetClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-forum" />;
}
