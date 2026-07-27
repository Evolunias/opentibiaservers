import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-forum');
}

export default function NoResetAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-forum" />;
}
