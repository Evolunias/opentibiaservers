import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-north-america');
}

export default function NoResetForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-north-america" />;
}
