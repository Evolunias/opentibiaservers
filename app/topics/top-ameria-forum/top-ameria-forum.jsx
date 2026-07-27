import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-forum');
}

export default function TopAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-forum" />;
}
