import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-forum');
}

export default function TopMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-forum" />;
}
