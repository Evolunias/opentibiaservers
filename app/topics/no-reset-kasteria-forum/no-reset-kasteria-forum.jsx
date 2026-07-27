import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-forum');
}

export default function NoResetKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-forum" />;
}
