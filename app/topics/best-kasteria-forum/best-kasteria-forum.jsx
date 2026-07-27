import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-forum');
}

export default function BestKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-forum" />;
}
