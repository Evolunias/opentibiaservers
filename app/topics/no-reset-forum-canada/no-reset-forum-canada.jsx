import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-canada');
}

export default function NoResetForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-canada" />;
}
