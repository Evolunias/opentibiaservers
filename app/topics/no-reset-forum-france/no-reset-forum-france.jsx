import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-france');
}

export default function NoResetForumFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-france" />;
}
