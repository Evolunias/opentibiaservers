import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-forum');
}

export default function ActiveKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-forum" />;
}
