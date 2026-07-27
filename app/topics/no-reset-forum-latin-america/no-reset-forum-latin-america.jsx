import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-latin-america');
}

export default function NoResetForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-latin-america" />;
}
