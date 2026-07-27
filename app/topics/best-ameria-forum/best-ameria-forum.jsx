import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-forum');
}

export default function BestAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-forum" />;
}
