import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-forum');
}

export default function BestMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-forum" />;
}
