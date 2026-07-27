import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-forum');
}

export default function NewSeasonMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-forum" />;
}
