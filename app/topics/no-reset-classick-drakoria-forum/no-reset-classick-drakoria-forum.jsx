import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-forum');
}

export default function NoResetClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-forum" />;
}
