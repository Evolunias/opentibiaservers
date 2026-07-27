import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-forum');
}

export default function FreshStartAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-forum" />;
}
