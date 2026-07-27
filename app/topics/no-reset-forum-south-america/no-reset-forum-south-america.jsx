import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-south-america');
}

export default function NoResetForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-south-america" />;
}
