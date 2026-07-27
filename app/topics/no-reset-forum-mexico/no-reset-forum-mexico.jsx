import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-mexico');
}

export default function NoResetForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-mexico" />;
}
