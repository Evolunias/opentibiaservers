import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-forum');
}

export default function NoResetNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-forum" />;
}
