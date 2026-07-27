import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-forum');
}

export default function TopKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-forum" />;
}
