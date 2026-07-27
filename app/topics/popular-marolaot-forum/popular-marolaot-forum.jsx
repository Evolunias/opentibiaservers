import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-forum');
}

export default function PopularMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-forum" />;
}
