import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-forum');
}

export default function FreshStartMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-forum" />;
}
